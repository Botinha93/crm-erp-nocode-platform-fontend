import {moduleBase} from './internal.js'
import {entity} from './internal.js'
import {globalVariables} from './internal.js'
class caf{
    getPropriety(name : string) : moduleBase{
        return globalVariables.entities[globalVariables.curentEntity].proprieties[name]; 
    }
    getEntity(name : string) : entity{
        return globalVariables.entities[name];
    }
}
