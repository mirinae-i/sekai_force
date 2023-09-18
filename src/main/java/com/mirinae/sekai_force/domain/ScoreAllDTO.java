package com.mirinae.sekai_force.domain;

import lombok.Data;

@Data
public class ScoreAllDTO {
    private Integer song_no;
    private Integer song_cate;
    private Double fc_easy;
    private Double fc_normal;
    private Double fc_hard;
    private Double fc_expert;
    private Double fc_master;
    private Double ap_easy;
    private Double ap_normal;
    private Double ap_hard;
    private Double ap_expert;
    private Double ap_master;
}
