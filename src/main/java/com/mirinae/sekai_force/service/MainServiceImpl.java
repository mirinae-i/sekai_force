package com.mirinae.sekai_force.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.mirinae.sekai_force.domain.Best39VO;
import com.mirinae.sekai_force.domain.CheckedVO;
import com.mirinae.sekai_force.domain.SongInfoAllVO;
import com.mirinae.sekai_force.persistence.MainDAO;

@Service
public class MainServiceImpl implements MainService {

    Logger logger = LoggerFactory.getLogger(MainServiceImpl.class);

    @Autowired
    MainDAO mainDAO;

    @Override
    public List<SongInfoAllVO> showSongInfoAll() {
        return mainDAO.getSongInfoAll();
    }

    @Override
    public String best39Action(MultipartHttpServletRequest request) {
        List<MultipartFile> fileList = request.getFiles("input");
        try {
            String data = new String(fileList.get(0).getBytes(), StandardCharsets.UTF_8);
            logger.info("** data: {} **", data);

            Gson gson = new Gson();
            List<CheckedVO> checkedList = gson.fromJson(data, new TypeToken<List<CheckedVO>>(){}.getType());
            logger.info("** Checked List: {} **", checkedList);

            List<Best39VO> Best39List = new ArrayList<>();
            for (CheckedVO checkedVO : checkedList) {
                Best39List.add(getScore(checkedVO));
            }
            logger.info("** Best 39 List: {} **", Best39List);

            // DTO -> JSON 직렬화 (Gson)
            String ScoreJson = gson.toJson(Best39List);
            logger.info("** JSON: {} **", ScoreJson);

            return ScoreJson;
        } catch (IOException e) {
            e.printStackTrace();
            return "File_IO_Exception";
        }
    }

    private Best39VO getScore(CheckedVO vo) {
        return mainDAO.getScore(vo);
    }

}
