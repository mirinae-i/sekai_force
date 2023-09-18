package com.mirinae.sekai_force.domain;

import lombok.Data;

@Data
public class CheckedVO {
    private Integer song_no;
    private Integer song_cate;
    private String difficulty;
    private String marker;
    private String score_col;
}
