package com.mirinae.sekai_force.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mirinae.sekai_force.domain.SongInfoAllVO;
import com.mirinae.sekai_force.persistence.MainDAO;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    MainDAO mainDAO;

    @Override
    public List<SongInfoAllVO> showSongInfoAll() {
        return mainDAO.getSongInfoAll();
    }

}
