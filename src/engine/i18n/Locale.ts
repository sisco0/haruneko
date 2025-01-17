export abstract class Locale {
    public readonly Code: string = 'und';
    public readonly Title: string = 'Undefined (XX)';
    public readonly Resources = {
        'FetchProvider.FetchWindow.TimeoutError': '【 FetchProvider.FetchWindow.TimeoutError 】',
        'FetchProvider.FetchWindow.CloudFlareError': '【 FetchProvider.FetchWindow.CloudFlareError 】\n{0}',
        'FetchProvider.FetchWindow.AlertCaptcha': '【 FetchProvider.FetchWindow.AlertCaptcha 】',
        'FrontendController.Reload.ConfirmNotice': '【 FrontendController.Reload.ConfirmNotice 】'
    };
}