import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  az: {
    translation: {
      "brand": "Marka",
      "model": "Model",
      "priceRange": "Qiymet Aralığı",
      "minPrice": "Min Qiymet",
      "maxPrice": "Max Qiymet",
      "year": "Il",
      "all": "Hamisi"
    }
  },
  en: {
    translation: {
      "brand": "Brand",
      "model": "Model",
      "priceRange": "Price Range",
      "minPrice": "Min Price",
      "maxPrice": "Max Price",
      "year": "Year",
      "all": "All"
    }
  },
  ru: {
    translation: {
      "brand": "Марка",
      "model": "Модель",
      "priceRange": "Ценовой диапазон",
      "minPrice": "Минимальная цена",
      "maxPrice": "Максимальная цена",
      "year": "Год",
      "all": "Все"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "az", // varsayılan dil
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
