angular.module('ado.portal-settings', [
  'ado.portal-settings.tpls',
  'ado.save-config-btn'
])
  .component('adoPortalSettings', {
    controller: 'AdoPortalSettingsCtrl',
    bindings: {device: '<'},
    templateUrl: './portal-settings.html'
  })
  .controller('AdoPortalSettingsCtrl', [
    'adoConfigService',
    function AdoPortalSettingsCtrl (adoConfigService) {

      $ctrl = this;

      $ctrl.languages = [
        {code: 'en', text: 'English'},
        {code: 'es', text: 'Español'},
      ];

      $ctrl.$onInit = function () {

        $ctrl.device = $ctrl.device || {};

        adoConfigService.get({id: $ctrl.device.id})
          .then(function (res) {
            $ctrl.settings = res.data;
          });

      };

    }
  ]);
