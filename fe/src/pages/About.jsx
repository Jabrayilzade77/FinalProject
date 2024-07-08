import { useEffect } from "react";
import "../pages/About.scss";
import { Helmet } from "react-helmet";
function About() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".hakkimizda_container, .back_image, .mukafatlar_container_header, .deyerlerimiz_container"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target); // Stop observing once it becomes visible
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="about_container">
        <div className="hakkimizda_container">
          <h1 className="hakkimizda_header">Hakkımızda</h1>
          <p className="desc_hakkimizda">
            2017-ci ildə Türkiyədə avtomobil ekosisteminin rəqəmsallaşmasına
            öncülük etmək üçün qurulduğumuz gündən bəri sürücüləri avtomobil
            məhsulları və xidmət təminatçıları ilə iki tərəfli bazar
            yerlərimizdə bir araya gətiririk.
          </p>

          <p className="desc_hakkimizda">
            İstanbul-dakı baş ofisimiz, Adana, Ankara, İzmir və Trabzonda
            yerləşən bölgə nümayəndəliklərimiz, Nevşehirdə yerləşən çağrı
            mərkəzimizdəki peşəkar heyətimizlə bir avtomobil hekayəsi yaratmaq
            üçün işlərimizi davam etdirir, avtomobil sektorunda ucdan-uca xidmət
            göstərən, təcrübə və məlumat şirkəti olma hədəfi ilə yolumuza davam
            edirik.
          </p>

          <p className="desc_hakkimizda">
            Müştərilərimizə təqdim etdiyimiz platformalar aşağıdakılardır:
          </p>

          <p className="desc_hakkimizda">
            Tasit.com: Şüarı "Keyfini Sür" olan Tasit.com, sürücülərin həyatını
            asanlaşdırmağı məqsəd qoyur. Tasit.com Mobilite Xidmətlərinin bazar
            yeridir. Kiralama təchizatçıları, avtomobil təmir nöqtələri,
            avtomobil salonları, ekspertizlər və təkər jant nöqtələri ilə
            sürücüləri bir araya gətirir.
          </p>

          <p className="desc_hakkimizda">
            2009-cu ildə qurulan Taşıt.com, 1,5 milyondan çox istifadəçisi ilə
            Garaj Sepeti tərəfindən 2017-ci ildə satın alınmışdır.
          </p>

          <p className="desc_hakkimizda">
            Araba.com: "Türkiye’nin Araba Pazarı" şüarına sahip Araba.com,
            sürücülərə nəqliyyat vasitələri və ehtiyat hissələri alış-verişində
            yeni nəsil həllər təqdim edən öncü bazar yeridir.
          </p>

          <p className="desc_hakkimizda">
            2003-cü ildə qurulan Araba.com, 2 milyondan çox istifadəçisi ilə
            Garaj Sepeti tərəfindən 2018-ci ildə satın alınmışdır. Bugünə qədər
            Araba.com platforması üzərində 4 milyondan çox nəqliyyat vasitəsi və
            ehtiyat hissəsi satışa çıxarılmışdır.
          </p>

          <p className="desc_hakkimizda">
            Datamotiv və Garaj Data: Datamotiv: "Türkiyənin Avtomobil Kataloqu"
            şüarı ilə Datamotiv, Türkiyədəki avtomobil parkının ən son
            kateqoriya və qiymət məlumatlarını paylaşır. Garaj Data: Garaj Data
            isə dəyərləndirmə kimi müxtəlif API xidmətləri ilə böyük məlumat
            həlləri təqdim edir.
          </p>
        </div>

        <div className="back_image"></div>

        <div className="mukafatlar_container_header">
          <h1 className="mukafatlar_header">Əhəmiyyətli Mükafatlarımız</h1>

          <div className="mukafatlar_container">
            <div className="europes_card">
              <p className="xettler_cont">
                <span className="noqte">.</span>
                <span className="il">2012</span>
                <span className="xett"></span>
              </p>
              <p className="desc_europe">
                Europe’s 100 hottest startups 2012
              </p>
              <p className="wired">
              Amerikan elm və texnologiya jurnalı “Wired” tərəfindən 2012-ci ildə Avropanın ən uğurlu startaplarından biri seçilmişdir.r. 
              </p>
            </div>
            <div className="europes_card">
              <p className="xettler_cont">
                <span className="noqte">.</span>
                <span className="il">2014</span>
                <span className="xett"></span>
              </p>
              <p className="desc_europe">
                Red Herring – Europe Top 100
              </p>
              <p className="wired">
              2014-cü ildə Red Herring Europe Top 100 mükafatlarında ən uğurlu 100 startapdan biri olaraq mükafata layiq görülmüşdür.</p>
            </div>
            <div className="europes_card">
              <p className="xettler_cont">
                <span className="noqte">.</span>
                <span className="il">2017</span>
                <span className="xett"></span>
              </p>
              <p className="desc_europe">Startup 100 / Garaj Sepeti</p>
              <p className="wired">
                {" "}
                2017-ci ildə Türkiyə Startup 100 siyahısında 14-cü sırada yer almışdır. 2017-dən sonra qurulan şirkətlər sıralamasında isə birinci olmuşdur.
              </p>
            </div>
            <div className="europes_card">
              <p className="xettler_cont">
                <span className="noqte">.</span>
                <span className="il">2018</span>
                <span className="xett"></span>
              </p>
              <p className="desc_europe">
                Webrazzi En İyi SaaS Girişimi 2’cilik
              </p>
              <p className="wired">
              Türkiye'nin en prestijli ödüllerinden Webrazzi Girişim Ödülleri'nde SaaS kategorisinde ikincilik kazanmıştı
              </p>
            </div>
          </div>
        </div>

        <div className="deyerlerimiz_container">
          <h1 className="mukafatlar_header">Dəyərlərimiz</h1>

          <div className="deyer_cards">
            <div className="asanliq_card">
              <p className="asanliq">Əlverişlilik</p>
              <p className="asanliq_desc">
              Müştərilərimizlə dəqiq bir ünsiyyət quraraq bütün prosesimizi başa düşmələrini təmin edirik.
              </p>
            </div>

            <div className="asanliq_card">
              <p className="asanliq">Şəffaflıq</p>
              <p className="asanliq_desc">
              Müştərilərimizə qarşı heç bir sürpriz yaşatmadan hər zaman açıq və dürüst davranırıq.
              </p>
            </div>

            <div className="asanliq_card">
              <p className="asanliq">Bərabərlik</p>
              <p className="asanliq_desc">
              Müştərilərimiz tərəfdaşlarımızdır. Bütün avtomobil alış və satış proseslərində hər cür dəstək ehtiyacınız üçün buradayıq.</p>
            </div>

            <div className="asanliq_card">
              <p className="asanliq">Modernlik</p>
              <p className="asanliq_desc">
              İnqilabi iş modelimizdə müştərilərimiz hər zaman ön plandadır. Bu, bizə təqdim etdiyimiz təcrübələri hər kəs üçün fərdiləşdirmək və sürətli hərəkət etmək imkanı verir.
              </p>
            </div>

            <div className="asanliq_card">
              <p className="asanliq">İnnovasiya</p>
              <p className="asanliq_desc">
              İnsanların avtomobil alma və satma tərzini yenidən dizayn etdik və ən yaxşı müştəri təcrübəsini təqdim etmək üçün daim çalışırıq.
              </p>
            </div>

            <div className="asanliq_card">
              <p className="asanliq">CarHaven Təminatı</p>
              <p className="asanliq_desc">
              CarHaven sizin yanınızdadır. Hər kəsin problemsiz bir şəkildə ikinci əl avtomobil alıb satması ən böyük məqsədimizdir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
