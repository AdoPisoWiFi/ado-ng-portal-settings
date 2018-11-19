angular.module('ado.portal-settings.tpls', []).run(['$templateCache', function($templateCache) {$templateCache.put('./portal-settings.html','\n<form name="form">\n  <div class="text-left">\n\n    <div class="form-group">\n      <label>Language:</label>\n      <select class="form-control" ng-options="lang.code as lang.text for lang in $ctrl.languages" ng-model="$ctrl.settings.language">\n      </select>\n    </div>\n\n    <div class="form-group">\n      <label>Page Title:</label>\n      <input class="form-control" type="text" ng-model="$ctrl.settings.page_title">\n    </div>\n\n    <div class="form-group">\n      <label>Banner Text:</label>\n      <input class="form-control" type="text" ng-model="$ctrl.settings.banner_text">\n    </div>\n    <div class="form-group">\n      <label>Powered By Text:</label>\n      <input class="form-control" type="text" ng-model="$ctrl.settings.footer_text">\n    </div>\n    <div class="form-group">\n      <label>Powered By URL:</label>\n      <input class="form-control" type="text" ng-model="$ctrl.settings.footer_link">\n    </div>\n\n  </div>\n\n  <hr>\n\n  <p>\n  <label>Show/Hide buttons</label>\n  </p>\n\n  <div class="input-demo checkbox-demo padd-bottom">\n    <label class="checkbox-inline custom-checkbox nowrap">\n      <input type="checkbox" name="disable_coinslot" ng-model="$ctrl.settings.disable_coinslot">\n      <span>\n        Disable insert coin button\n      </span>\n    </label>\n  </div>\n\n  <div class="input-demo checkbox-demo padd-bottom">\n    <label class="checkbox-inline custom-checkbox nowrap">\n      <input type="checkbox" name="disable_buy_voucher" ng-model="$ctrl.settings.disable_buy_voucher">\n      <span>\n        Disable buy voucher button\n      </span>\n    </label>\n  </div>\n\n  <div class="input-demo checkbox-demo padd-bottom">\n    <label class="checkbox-inline custom-checkbox nowrap">\n      <input type="checkbox" name="view_rates" ng-model="$ctrl.settings.disable_view_rates">\n      <span>\n        Disable view rates button\n      </span>\n    </label>\n  </div>\n\n  <div class="padd-top">\n    <save-config-btn device="$ctrl.device" ng-disabled="form.$dirty && form.$invalid" config="{\n    language: $ctrl.settings.language,\n    banner_text: $ctrl.settings.banner_text,\n    footer_link: $ctrl.settings.footer_link,\n    footer_text: $ctrl.settings.footer_text,\n    page_title: $ctrl.settings.page_title,\n    disable_coinslot: $ctrl.settings.disable_coinslot,\n    disable_buy_voucher: $ctrl.settings.disable_buy_voucher,\n    disable_view_rates: $ctrl.settings.disable_view_rates}">Save Changes</save-config-btn>\n  </div>\n\n</form>\n\n');}]);
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
