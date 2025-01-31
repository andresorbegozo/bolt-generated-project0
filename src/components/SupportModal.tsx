import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SupportModalProps {
  onClose: () => void;
}

export default function SupportModal({ onClose }: SupportModalProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{t('supportUs')}</h2>
        <p className="text-gray-700 mb-4">
          {t('supportMessage')}
        </p>
        <div id="paypal-button-container-P-7J40549651300342EM6OMQVI" className="flex justify-center mb-4"></div>
        <script src="https://www.paypal.com/sdk/js?client-id=AVHy4nMgWnhKv0Csh5Gf6T2OCAZRfwR-FaMlhdq7reeysGkldRbBkYyTo3pVyDD1WGjxj3IFvocIMdo7&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
        <script dangerouslySetInnerHTML={{__html: `
          paypal.Buttons({
              style: {
                  shape: 'rect',
                  color: 'gold',
                  layout: 'vertical',
                  label: 'subscribe'
              },
              createSubscription: function(data, actions) {
                return actions.subscription.create({
                  /* Creates the subscription */
                  plan_id: 'P-7J40549651300342EM6OMQVI'
                });
              },
              onApprove: function(data, actions) {
                alert(data.subscriptionID); // You can add optional success message for the subscriber here
              }
          }).render('#paypal-button-container-P-7J40549651300342EM6OMQVI'); // Renders the PayPal button
        `}} />
        <div className="text-center text-sm text-gray-500 mb-4">
          <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7J40549651300342EM6OMQVI" target="_blank" rel="noopener noreferrer">
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal Subscribe" className="h-32 mx-auto" />
          </a>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
}
