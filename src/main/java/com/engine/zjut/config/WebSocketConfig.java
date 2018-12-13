package com.engine.zjut.config;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * @ClassName:WebSocketConfig.java
 * @Description:TODO （websocke实现通信后端config代码）
 * @Author:qzh
 * @Date: 2018/11/17 15:07
 * @Version 1.0
 */
@Component
public class WebSocketConfig {
    @Bean
    public ServerEndpointExporter serverEndpointExport(){
        return new ServerEndpointExporter();
    }
}
