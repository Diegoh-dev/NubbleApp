// FUNÇÃO QUE VERIFICA SE A PERMISSÃO ESTÁ CONCEDIDA OU NÃO

import {PermissionName, PermissionService, PermissionStatus} from './permissionTypes';

async function check(name:PermissionName):Promise<PermissionStatus> {

}

// FUNÇÃO QUE VAI SER CHAMADA NA PRIMEIRA VEZ PARA REQUISITAR A PERMISSÃO
async function request(name: PermissionName)Promise<PermissionStatus> {}
export const permissionService: PermissionService = {
    request,
    check,
};
