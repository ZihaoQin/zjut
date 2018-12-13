package com.engine.zjut.VO;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName:UserLocVO.java
 * @Description:TODO （）
 * @Author:qzh
 * @Date: 2018/11/2 13:22
 * @Version 1.0
 */
@Data
public class UserLocVO {
    private Integer userId;
    private String userName;
    private String email;
    private String phone;
    private Integer role;
    private Integer state;
    //昵称
    private String nickName;

    List<LocVO> locVO = new ArrayList<>();

}
