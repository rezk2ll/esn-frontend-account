'use strict';

require('../../common/profile-api.service.js');

angular.module('linagora.esn.profile')
  .controller('profileShowDetailsController', profileShowDetailsController);

function profileShowDetailsController($scope, profileHelpersService) {
  var self = this;

  self.$onInit = $onInit;

  function $onInit() {
    $scope.user = self.user;
    self.canEdit = profileHelpersService.canEdit(self.user);
  }
}
