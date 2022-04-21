import {
  getDatabase,
  get,
  ref,
  set,
  remove,
  onValue,
  DataSnapshot,
  child,
  off,
} from 'firebase/database';
import { IData } from '../common/global_state';

class DiaryRepository {
  firebaseDB: any;
  //
  constructor() {
    this.firebaseDB = getDatabase();
  }
  syncDiaryData(userId: string, path: IPath, onUpdate: (data: any) => any) {
    const query = ref(this.firebaseDB, `${userId}/${path}`);
    onValue(query, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });

    return () => off(query);
  }

  readDiary(uid: string, path: IPath) {
    const dbRef = ref(this.firebaseDB);
    get(child(dbRef, `${uid}/${path}`))
      .then((snapshot: any) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  saveDiary(userId: string, path: IPath, diaryData: IData) {
    set(ref(this.firebaseDB, `${userId}/${path}/${diaryData.id}`), diaryData);
  }

  removeDiary(userId: string, path: IPath, cardId: string) {
    remove(ref(this.firebaseDB, `${userId}/${path}/${cardId}`));
  }
}

export default DiaryRepository;

export enum IPath {
  diary = 'diary',
  memo = 'memo',
  habbit = 'habbit',
}
