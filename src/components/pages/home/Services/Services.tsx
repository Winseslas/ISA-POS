import { ImageSlider } from './ImageSlider'
import { ThumbnailSlider } from './ThumbnailSlider'
import { useTranslation } from 'react-i18next';
import ItemList from './ItemList';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div id="restoration" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <ImageSlider
              images={[
                "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
              ]}
              autoPlay={true}
              interval={4000}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('pages.indexPage.services.restoration.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('pages.indexPage.services.restoration.description')}
            </p>
            <ItemList items={t('pages.indexPage.services.restoration.items', { returnObjects: true })} />
            <ThumbnailSlider
              images={[
                "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=150"
              ]}
              title={t('pages.indexPage.services.restoration.title')}
            />
          </div>
        </div>

        {/* Beauty Institute */}
        <div id="beauty-institute" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('pages.indexPage.services.beauty_institute.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('pages.indexPage.services.beauty_institute.description')}
            </p>
            <ItemList items={t('pages.indexPage.services.beauty_institute.items', { returnObjects: true })} />
            <ThumbnailSlider
              images={[
                "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3985166/pexels-photo-3985166.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3985167/pexels-photo-3985167.jpeg?auto=compress&cs=tinysrgb&w=150"
              ]}
              title={t('pages.indexPage.services.beauty_institute.title')}
            />
          </div>
          <div className="order-1 lg:order-2">
            <ImageSlider
              images={[
                "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3985166/pexels-photo-3985166.jpeg?auto=compress&cs=tinysrgb&w=600"
              ]}
              autoPlay={true}
              interval={4500}
            />
          </div>
        </div>

        {/* Drinks & Dancing */}
        <div id="drinks-dancing" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <ImageSlider
              images={[
                "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=600"
              ]}
              autoPlay={true}
              interval={3500}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('pages.indexPage.services.drinks_dancing.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('pages.indexPage.services.drinks_dancing.description')}
            </p>
            <ItemList items={t('pages.indexPage.services.drinks_dancing.items', { returnObjects: true })} />
            <ThumbnailSlider
              images={[
                "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=150"
              ]}
              title={t('pages.indexPage.services.drinks_dancing.title')}
            />
          </div>
        </div>

        {/* Commerce & Shopping */}
        <div id="commerce-shopping" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('pages.indexPage.services.commerce_shopping.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('pages.indexPage.services.commerce_shopping.description')}
            </p>
            <ItemList items={t('pages.indexPage.services.commerce_shopping.items', { returnObjects: true })} />
            <ThumbnailSlider
              images={[
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/1005640/pexels-photo-1005640.jpeg?auto=compress&cs=tinysrgb&w=150"
              ]}
              title={t('pages.indexPage.services.commerce_shopping.title')}
            />
          </div>
          <div className="order-1 lg:order-2">
            <ImageSlider
              images={[
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
              ]}
              autoPlay={true}
              interval={4200}
            />
          </div>
        </div>

        {/* Miscellaneous Services */}
        <div id="miscellaneous-services" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
          <div>
            <ImageSlider
              images={[
                "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600"
              ]}
              autoPlay={true}
              interval={3800}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('pages.indexPage.services.miscellaneous_services.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('pages.indexPage.services.miscellaneous_services.description')}
            </p>
            <ItemList items={t('pages.indexPage.services.miscellaneous_services.items', { returnObjects: true })} />
            <ThumbnailSlider
              images={[
                "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150",
                "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=150"
              ]}
              title="Miscellaneous Services"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
