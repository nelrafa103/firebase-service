
import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/repos/firestore/firestore.service';

@Injectable()
export class GamesService {
  constructor(private readonly firestoreService: FirestoreService) {}

  async insertGameList(value: any, key: string) {
    await this.firestoreService.collection.doc(key).set({value})
  }


  // Retorna un objecto encontrado en firestore
  async getGameList(key: string) {
    const promesas = (await this.firestoreService.collection.doc(key).get()).data()
    console.log(promesas)
    return promesas
  }


}
