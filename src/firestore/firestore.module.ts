import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { FirestoreService } from './repos/firestore/firestore.service';
const firebaseProvider = {
	provide: 'FIREBASE_APP',
	inject: [ConfigService],
	useFactory: (configService: ConfigService) => {
		const firebaseConfig = {
			type: "service_account",
			project_id: "proje-ec59e",
			private_key_id: "1f87d5b53b87ce56cb97d66c7e737945ec8e2755",
			private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXkQsTuwy9vDLq\nq0aTL4Gdo58y7zn266fOZilHoOpJNQMqpvahfNQ9TS2czreOcYNRnwbn8aTvS6oT\nn0xQvThvFTm6AWcVSnWiiV1l8A3gzoke4ZF4GoIOOhKWJzScHhcxntkUL7Hmf3Ve\nwsbBnCIDT5A0XLgaY36SFpgwbEe2toU+U6m1IyNNTyxkTGqKumjnmF3ZaOAfE5jH\nCZsFpqGD2MmrVb+GQa2ONS2FdtXkC8EEvpTgMwGtc5yoDALt8eLc+9Cy7BeLTn1S\njZHm+oFDaVnYw3i0Di948SruhD4aZTzqRnOCk0eXoNcKDOaBekLeqOnIvFQud9mk\n57gcQn6TAgMBAAECggEANk9pMonkTmM9kskfKVMFPXGtWNhTysWZjBNKIC1HCbWs\n/BB/v7TjBiTNMp4UOfOYabZ+t242p0FxcqsmP4tEzhvTZO0YixEs7Qvdt6KQ5Iw0\nmM6s500KakowR5tOEm00W8CRIZhYomGHcR3ylHHhUeM4SjD4A1IA4A6IPl7xfHMu\nY32fZneALTbMiEqLSzhFPCU16SqF93OJQFWOsScKvn9HtYxTs3nOXybEKsGWaDzU\nNiDUmk5gmWXicgzBwjJCzX9ZFIKm1dg/TD9iOZuWChLP2bISUVLa9DAVTU84ABnd\n5IYE9T4WC2FITpiXPPKP9TPiMGY36E3cRFGK7seDLQKBgQDs+jkOge0IrO41EenI\npmx+zHdpKmaV8DxO/fSJNx15tcEktzRNGloCCRXb9ETKvPwIhVmLMQfm+ITamu+g\nivfhXR2IMou/TrPZEYNNmoRXS28V4lK2ichmK2ZNg0PHbJcYbKZwPhiY48HFAJzq\nh6r65w6KPbw4hx9bqvL1ypgoPwKBgQDo3tZNtTt5Ws2rxobzM0RZV9wvdmdSYJ4c\n4RAPre8q/ZbskCh3cLIY23i+JMz33DHsj9gZiQsixcNLRAQxWNwVHcEkPytSfBPc\nMZ5DkfJ9sokzgy6vvWX+CFKdhPsflAv9TiD8ZxuFItC91auGBqKHf/lUzUR2QMPH\n892nWB20rQKBgFg8axY9xlZenWthOh0d6nPkCeo8gWn+w1XeNTkKLo1s4XecR3sV\n/sGXRG5bq2mZqHY7wLWVEg4sJruGyQaL9/QPybk2qNYYpdqDLNKuX+xpB/msBYQ2\nFUoFitf9sjUE99V+TxKn7FyxISsLKWIiFcXKVp2ekwCxPznQkxp1zuXdAoGAFrST\nhKQlFmIKJ7OFuPTIt0VfzKjozhlpkTtIi57T8QckzhAIQg0U8GOF1FRWP9ySaZRk\n56h7E3rg3dfV6NHXM5/hEx2tpa8/aHrWCZSTZjogMouZ47y90xUQqRcsPRn8SUhy\n4ulSv5pza+8HeFvxQPDzaJdTE4yhCj/23rgyvUkCgYEAma2g2HavABJWOzW/l0Zo\niOiIT1eEveozqwAQOzcLfh/N/Ji4k98NNDwgpexe5YEWb+8yWb/dJ+i0707th0bP\nuoCDaU3rHMo9qZSHQYKMmCKfx7kkd0kg3qJ217tLMgawuLjSFaV/JnEXUBxV6LHg\nVbpTMYCgKVvQN944WG9UEKU=\n-----END PRIVATE KEY-----\n",
			client_email: "firebase-adminsdk-9excn@proje-ec59e.iam.gserviceaccount.com",
			client_id: "108081920040121359053",
			auth_uri: "https://accounts.google.com/o/oauth2/auth",
			token_uri: "https://oauth2.googleapis.com/token",
			auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
			client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9excn%40proje-ec59e.iam.gserviceaccount.com",
			universe_domain: "googleapis.com"
		} as admin.ServiceAccount;

		return admin.initializeApp({
			credential: admin.credential.cert(firebaseConfig),
			databaseURL: configService.get<string>('DATABASE_URL'),
			storageBucket: configService.get<string>('STORAGE_BUCKET'),
		});
	},
};


@Module({
	imports: [ConfigModule],
	providers: [firebaseProvider, FirestoreService],
	exports: [FirestoreService],
})
export class FirestoreModule {}
