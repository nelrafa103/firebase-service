import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { GamesService } from 'src/services/games/games.service';

@Controller()
export class GamesController {

	constructor(private readonly gameService: GamesService) {}

	@MessagePattern({ cmd: 'insert_on_firestore' })
	insertListGame(params: {value: any, key: string}) {
	//	console.log(params.value)
		console.log(typeof params.key)
		console.log(params)
		console.log('Confirmando', params.value)
		this.gameService.insertGameList(params.value,params.key)
		return 'hello'
	}

	@MessagePattern({ cmd: 'read_on_firestore' })
	async getListGame(params: { key: string }) {
		const result = await  this.gameService.getGameList(params.key)
		return result;
	}
}
