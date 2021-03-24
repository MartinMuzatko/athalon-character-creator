import type { Dependencies } from '../dependencies'
import type { ParsedQuery } from '../http/appTypes'
import * as R from 'ramda'

import type { Character } from '../types'

export const create = R.curry(async (dependencies: Dependencies, accountId: string, character: Character) => {
    const characterDb = await dependencies.services.databaseService.getCharacterDatabase(dependencies)
    const id = dependencies.lib.nanoid.nanoid()
    // const await dependencies.services.skinService.getOnlineSkinForName(character.minecraftName)
    const skinId = '8'
    await dependencies.services.databaseService.create(characterDb, { id, character, accountId, skins: [skinId] })
    // const uuid = await dependencies.services.minecraftAvatarService.getUuidByUsername(dependencies, character.minecraftName)
    // await dependencies.services.minecraftAvatarService.saveAvatar(dependencies, uuid, id)
    return id
})

export const update = R.curry(async (dependencies: Dependencies, id: string, character: Character) => {
    const db = await dependencies.services.databaseService.getCharacterDatabase(dependencies)
    return dependencies.services.databaseService.update(
        db,
        id,
        // only update the character property by merging
        // @ts-ignore
        R.adjust(R.__, R.over(R.lensProp('character'), R.mergeLeft(character)))
    )
})

export const remove = R.curry(async (dependencies: Dependencies, id: string) => {
    const db = await dependencies.services.databaseService.getCharacterDatabase(dependencies)
    return dependencies.services.databaseService.removeById(db, id)
})

export const findByAccountId = R.curry(async (dependencies: Dependencies, accountId: string) => {
    const db = await dependencies.services.databaseService.getCharacterDatabase(dependencies)
    return db(R.filter(R.whereEq({ accountId: parseInt(accountId) })))
})

export const get = R.curry(async (dependencies: Dependencies, id: string) => {
    const db = await dependencies.services.databaseService.getCharacterDatabase(dependencies)
    return dependencies.services.databaseService.getById(db, id)
})

export const find = R.curry(async (dependencies: Dependencies, query: ParsedQuery) => {
    const db = await dependencies.services.databaseService.getCharacterDatabase(dependencies)
    return dependencies.services.databaseService.find(db, query)
})
