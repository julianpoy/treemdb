'use strict';

angular.module('treeMdbApp')
  .factory('Contact', ['$resource', function($resource) {

    return $resource( apiBase + 'index.php/contacts/:Id', 
        { Id: '@Id' }, { 
            query: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            },
            get: { 
                method: 'GET', 
                params: { Id: '@Id' }, 
                isArray: false 
            },
            save: { 
                method: 'POST', 
                params: {},
                isArray: false 
            },
            update: { 
                method: 'PUT', 
                params: { Id: '@id' }, 
                isArray: false 
            },
            delete: { 
                method: 'DELETE', 
                params: { Id: '@Id' }, 
                isArray: false 
            }
            
        } );

}]);

angular.module('treeMdbApp')
  .factory('ContactSearch', ['$resource', function($resource) {

    return $resource( apiBase + 'index.php/contacts/search', 
        {}, { 
            search: { 
                method: 'POST', 
                params: {}, 
                isArray: false 
            }            
        } );

}]);

angular.module('treeMdbApp')
  .factory('Donations', ['$resource', function($resource) {

    return $resource( apiBase + 'donations.php/donations/:Id', 
        { Id: '@Id' }, { 
            get: { 
                method: 'GET', 
                params: { Id: '@Id' }, 
                isArray: false 
            },
            save: { 
                method: 'POST', 
                params: {},
                isArray: false 
            },
            delete: { 
                method: 'DELETE', 
                params: { Id: '@Id' }, 
                isArray: false 
            }
            
        } );

}]);
