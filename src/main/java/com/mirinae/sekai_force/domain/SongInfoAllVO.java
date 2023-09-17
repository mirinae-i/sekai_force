package com.mirinae.sekai_force.domain;

import lombok.Data;

@Data
public class SongInfoAllVO {
    private Integer song_no;
    private Integer song_cate;
    private String song_name;
    private String song_name_kr;
    private Integer level_easy;
    private Integer level_normal;
    private Integer level_hard;
    private Integer level_expert;
    private Integer level_master;
}
