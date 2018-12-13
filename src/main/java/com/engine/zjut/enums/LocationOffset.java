package com.engine.zjut.enums;

import lombok.Getter;

/**
 * @ClassName:LocationOfset.java
 * @Description:TODO （坐标矫正）
 * @Author:qzh
 * @Date: 2018/11/2 22:01
 * @Version 1.0
 */
@Getter
public enum LocationOffset {
    LONGITUDE(0.011245198,"经度"),//0.011335198        0.011235198
    LATITUDE(0.003393561,"纬度"),//0.003493561         0.003393561
    ;
    private Double num;
    private String msg;
    LocationOffset(Double num,String msg) {
        this.num = num;
        this.msg = msg;
    }
}
