package com.engine.zjut.VO;

import lombok.Data;

import java.util.Date;

/**
 * @ClassName:LocVO.java
 * @Description:TODO （）
 * @Author:qzh
 * @Date: 2018/11/2 13:48
 * @Version 1.0
 */
@Data
public class LocVO {
    private Integer locationId;
    //纬度
    private Double latitude;
    //经度
    private Double longitude;
    //时间
    private Date time;
    //用户ip
    private String userIp;
}
