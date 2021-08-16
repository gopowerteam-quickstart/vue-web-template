/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import type { Observable } from 'rxjs'
import { PosterController } from '@/http/controller/material-service/poster.controller'

export class PosterService {
    /**
     * 创建
     */
    @Request({
        server: PosterController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 删除
     */
    @Request({
        server: PosterController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 查询全部
     */
    @Request({
        server: PosterController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 使用ID查询
     */
    @Request({
        server: PosterController.getById
    })
    public getById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * getWxQrcode
     */
    @Request({
        server: PosterController.getWxQrcode
    })
    public getWxQrcode(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 分页查询
     */
    @Request({
        server: PosterController.query
    })
    public query(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 发送提醒消息
     */
    @Request({
        server: PosterController.sendReminderMessage
    })
    public sendReminderMessage(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 更新
     */
    @Request({
        server: PosterController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
