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
  syncDiaryData(userId: string, onUpdate: (data: any) => any) {
    const query = ref(this.firebaseDB, `${userId}/diary`);
    onValue(query, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });

    return () => off(query);
  }

  readDiary(uid: string) {
    const dbRef = ref(this.firebaseDB);
    get(child(dbRef, `${uid}/diary`))
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

  saveDiary(userId: string, diaryData: IData) {
    set(ref(this.firebaseDB, `${userId}/diary/${diaryData.id}`), diaryData);
  }

  removeDiary(userId: string, cardId: string) {
    remove(ref(this.firebaseDB, `${userId}/diary/${cardId}`));
  }
}

export default DiaryRepository;
