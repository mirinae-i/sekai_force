package com.mirinae.sekai_force.domain;

import lombok.Data;

@Data
public class Best39VO {
    private Integer song_no;
    private Integer song_cate;
    private String song_name;
    private String song_name_kr;
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
