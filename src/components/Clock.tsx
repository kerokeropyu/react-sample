import { useEffect, useState } from "react";

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000;

// LocalStorageで使用するキー
const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  JP = "ja=JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setlocale] = useState(Locale.US);

  // タイマーをセット
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);
    return () => {
      clearInterval(timer);
    };
    // 初回描画時のみ実行する
  }, []);

  // localstorageから値を読み込むための副作用
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setlocale(getLocaleFromString(savedLocale));
    }
  }, []);

  // localeが変化した時にlocalstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, []);
  return (
    <>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>：{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => {
            setlocale(getLocaleFromString(e.target.value));
          }}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </>
  );
};