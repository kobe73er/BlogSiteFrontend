/**
 * Created by dengpengfei on 2017/7/11.
 */

export class AppSettings {
  public static SEVER_ADDRESS = '127.0.0.1';
  public static PORT = '8082';
  public static GET_ALL_ARTICLES = 'getAllArticles';

  public static ALL_ARTICLES_API = AppSettings.SEVER_ADDRESS + ':' + AppSettings.PORT + '/' + AppSettings.GET_ALL_ARTICLES
}
