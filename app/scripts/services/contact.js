'use strict';

angular.module('treeMdbApp')
  .factory('Contact', ['$resource', function($resource) {

    return $resource( apiBase + 'contacts/:Id', 
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
                params: {}, 
                isArray: false 
            },
            delete: { 
                method: 'DELETE', 
                params: { userId: '@Id' }, 
                isArray: false 
            }
            
        } );

}]);

angular.module('treeMdbApp')
  .factory('ContactSearch', ['$resource', function($resource) {

    return $resource( apiBase + 'contacts/search', 
        {}, { 
            search: { 
                method: 'POST', 
                params: {}, 
                isArray: false 
            }            
        } );

}]);
