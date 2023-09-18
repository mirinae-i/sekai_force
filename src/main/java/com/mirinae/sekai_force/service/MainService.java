package com.mirinae.sekai_force.service;

import java.util.List;

import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mirinae.sekai_force.domain.SongInfoAllVO;

public interface MainService {
    
    List<SongInfoAllVO> showSongInfoAll();
    String best39Action(MultipartHttpServletRequest request);
}
