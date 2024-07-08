import { Helmet } from 'react-helmet';
import Accordion from '../pages/Accordion';
import "../pages/Yardim.scss"

const questions = [
  {
    question: "Elanım niyə dərc olunmadı?",
    answer: `
      Çox güman ki, siz elan yerləşdirmə Qaydalarından hər hansısa birinə və ya bir neçəsinə əməl etməmisiniz.
      Səbəb daha ətraflı şəkildə elanı yerləşdirərkən qeyd etdiyiniz email ünvanına göndərilib.
      Həmçinin elanın dərc olunmama səbəbi ilə
      saytın tam (desktop) versiyasında Şəxsi kabinetdəki “Mənim elanlarım” > “İmtina olunmuş” bölməsində;
      saytın mobil versiyasında Şəxsi kabinetdəki “İmtina olunmuş” bölməsində;
      tətbiqdə isə Şəxsi kabinetdəki “İmtina olunmuş” bölməsində tanış ola bilərsiniz.
    `
  },
  {
    question: "Elana necə düzəliş edim?",
    answer: `
      Şəxsi kabinetdə düzəliş üçün:
      Şəxsi kabinetə daxil olun.
      Saytın tam versiyasındasınızsa,“Mənim elanlarım” səhifəsini açın, mobil versiyada və ya tətbiqdəsinizsə, növbəti addıma keçin.
      Saytın tam və ya mobil versiyasında “Saytda” bölməsini, tətbiqdə isə “Hazırda saytda” bölməsini seçin.
      Düzəliş etmək istədiyiniz elanın aşağısında Düzəliş et düyməsini görəcəksiniz. Onu sıxın.
      Lazım olan düzəlişləri etdikdən sonra Elanı yenilə düyməsini sıxın.
      Elanınızın öz səhifəsində düzəliş üçün:
      Düzəliş etmək istədiyiniz elanınızı saytda tapın və açın.
      Elan səhifəsinin aşağısında Düzəliş et düyməsini görəcəksiniz. Onu sıxın.
      Elan yerləşdirilən zaman sizə göndərilən PIN-kodu daxil edin və redaktəyə başlayın.
      Lazım olan düzəlişləri etdikdən sonra Elanı yenilə düyməsini sıxın.
      Kateqoriyadan asılı olaraq siz qiyməti və təsviri dəyişə, şəkilləri silə və ya əlavə edə və digər düzəlişlər edə bilərsiniz.
      Düzəliş etdikdən sonra elanınız yoxlamaya göndəriləcək. Yoxlama 1 saata qədər çəkə bilər, lakin adətən düzəlişlər bir neçə dəqiqədən sonra tətbiq olunur.
      Unutmayın ki, 24 saat ərzində bir elana yalnız 2 dəfə düzəliş edə bilərsiniz.
    `
  },
  {
    question: "Elanı necə yerləşdirim?",
    answer: `
      Siz elanı CarHaven.az saytının tam (desktop) və ya mobil versiyasında, eləcə də mobil tətbiqdə yerləşdirə bilərsiniz.
      Saytın tam və ya mobil versiyasında elan yerləşdirmək üçün:
      Tam versiyada yuxarı sağ küncdəki Yeni elan düyməsini, mobil versiyada isə ekranın aşağısındakı Yeni elan və ya yuxarı sağ küncdəki + düyməsini sıxın.
      Açılan səhifədə xanaları dolduraraq nəqliyyat vasitəsi barədə məlumatları qeyd edin. Nəzərə alın ki, bu məlumatları potensial alıcılar oxuyacaq.
      Elanı Şəxsi kabinetinizdən yerləşdirirsinizsə, Əlaqə məlumatları hissəsində profiliniz üçün təsdiqlənmiş telefon nömrəsi müvafiq xanaya doldurulacaq.
      Əgər elanı Şəxsi kabinetə daxil olmadan yerləşdirirsinizsə, onun yoxlamaya göndərilməsi üçün Əlaqə məlumatları hissəsində qeyd etdiyiniz telefon nömrəsini təsdiqləməlisiniz.
      Demək olar ki, hazırdır! Sadəcə Elan yerləşdir düyməsini sıxmaq qalır: Şəxsi kabinetdən yerləşdirirsinizsə, elan dərhal yoxlamaya göndəriləcək; daxil olmamısınızsa, elan telefon nömrənizi təsdiqlədikdən sonra yoxlamaya göndəriləcək və bütün qaydalara əməl olunduğu təqdirdə dərc olunacaq.
      Mobil tətbiqdə elan yerləşdirmək üçün:
      Ekranın aşağısındakı Yeni elan düyməsini sıxın.
      Açılan siyahılarda təqdim etdiyiniz nəqliyyat vasitəsinin aid olduğu markanı və modeli seçin.
      Növbəti səhifədə xanaları dolduraraq nəqliyyat vasitəsi barədə məlumatları qeyd edin. Nəzərə alın ki, bu məlumatları potensial alıcılar oxuyacaq.
      Elanı Şəxsi kabinetinizdən yerləşdirirsinizsə, Əlaqə məlumatları hissəsində profiliniz üçün təsdiqlənmiş telefon nömrəsi müvafiq xanaya doldurulacaq.
      Əgər elanı Şəxsi kabinetə daxil olmadan yerləşdirirsinizsə, onun yoxlamaya göndərilməsi üçün Əlaqə məlumatları hissəsində qeyd etdiyiniz telefon nömrəsini təsdiqləməlisiniz.
      Demək olar ki, hazırdır! Sadəcə Elanı əlavə et düyməsini sıxmaq qalır: Şəxsi kabinetdən yerləşdirirsinizsə, elan dərhal yoxlamaya göndəriləcək; daxil olmamısınızsa, elan telefon nömrənizi təsdiqlədikdən sonra yoxlamaya göndəriləcək və bütün qaydalara əməl olunduğu təqdirdə dərc olunacaq.
      Yoxlama adətən bir neçə dəqiqə çəkir, lakin proses uzana da bilər. Ona görə də elanınızı nəticələrdə axtarmadan öncə onu “Saytda” (tətbiqdə “Hazırda saytda) bölməsində açın: əgər elan hələ də “Gözləmədə” bölməsindədirsə, deməli, istifadəçilər axtarışda hələ təklifinizi görmür.
    `
  },
  {
    question: "Elanı necə silim?",
    answer: `
      Şəxsi kabinetdə silmək üçün:
      Şəxsi kabinetə daxil olun.
      Saytın tam versiyasındasınızsa,“Mənim elanlarım” səhifəsini açın, mobil versiyada və ya tətbiqdəsinizsə, növbəti addıma keçin.
      Saytın tam və ya mobil versiyasında “Saytda” bölməsini, tətbiqdə isə “Hazırda saytda” bölməsini seçin.
      Silmək istədiyiniz elanın aşağısında Elanı sil düyməsini görəcəksiniz. Onu sıxın.
      Elanınızın səhifəsində silmək üçün:
      Silmək istədiyiniz elanınızı saytda tapın və açın.
      Elan yerləşdirilən zaman sizə göndərilən PIN-kodu daxil edin və təsdiq edin.
      Elan səhifəsinin aşağısında Elanı sil düyməsini görəcəksiniz. Onu sıxın.
      Silindikdən sonra elanınız “Saytda” (tətbiqdə “Hazırda saytda) statusundan “Müddəti başa çatmış” statusuna keçiriləcək və onu istənilən vaxt ödənişli şəkildə bərpa etmək mümkün olacaq.
    `
  }
];

const Yardim = () => {
  return (
    <div className="help-page">

<Helmet>
        <meta charSet="utf-8" />
        <title>Help Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1></h1>
      <Accordion questions={questions} />
    </div>
  );
};

export default Yardim;
