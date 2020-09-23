const childOf = function () {return this.parents.map(p => p.name).join(' & ')}

const unknown = {name : "unknown"}
unknown.parents = [unknown,unknown]
unknown.childOf

const grandmaS = {name : "Erzsebet", parents :[unknown,unknown],childOf}
const grandadS = {name : "Laszlo", parents :[unknown,unknown],childOf}
const grandmaR ={name : "Lesley", parents :[unknown,unknown],childOf}
const grandadR = {name : "Malcolm", parents :[unknown,unknown],childOf}

const gen1 = {name : 'first generation' , members : [grandmaR, grandmaS, grandadR, grandadS]}

const auntS = {name : "Helen", parents :[unknown,unknown],childOf}
const uncleS = {name : "Laszlo", parents :[grandadS,grandmaS],childOf}
const dad = {name : "Steve", parents :[grandadS,grandmaS],childOf}

const mum  = {name : "Fiona", parents :[grandadR,grandmaR],childOf}
const auntR1 = {name : "Sarah", parents :[grandadR,grandmaR],childOf}
const auntR2 = {name : "Sandra", parents :[unknown,unknown],childOf}
const auntR3 = {name : "Becca", parents :[unknown,unknown],childOf}
const uncleR1 = {name : "Andrew", parents :[grandadR,grandmaR],childOf}
const uncleR2 = {name : "Ian", parents :[grandadR,grandmaR],childOf}

const gen2 = {name : 'second generation' , members : [auntR1, auntR2, auntR3, auntS, mum, uncleR1,uncleR2, uncleS,dad]}

const cousinS1 = {name:"Ben",parents : [uncleS,auntS], childOf}
const cousinS2 = {name:"Tom",parents : [uncleS,auntS], childOf}

const me ={name:'john',parents : [mum,dad],childOf}
const sibling1 ={name:'Kathryn',parents : [mum,dad],childOf}
const sibling2 ={name:'Ewan',parents : [mum,dad],childOf}

const cousinR1 ={name:'Barnaby',parents : [auntR3,uncleR2],childOf}
const cousinR2 ={name:'Florence',parents : [auntR3,uncleR2],childOf}

const gen3 = {name:'third generation',members:[cousinR1,cousinR2, cousinS1,cousinS2,me,sibling1,sibling2]}

const familyTree = {name:"the whole tree",generations:[gen1,gen2,gen3]}
