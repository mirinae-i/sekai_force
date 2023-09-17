package com.mirinae.sekai_force.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mirinae.sekai_force.domain.SongInfoAllVO;

@Mapper
public interface MainDAO {
    
    List<SongInfoAllVO> getSongInfoAll();
    List<SongInfoAllVO> getSongInfoScoreAll();
}
