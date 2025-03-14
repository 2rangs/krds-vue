export const generateCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];

  // 전달 마지막 주 계산
  const prevLastDay = new Date(year, month, 0);
  const startOffset = firstDay.getDay(); // 이번 달 시작 요일 (0: 일요일 ~ 6: 토요일)

  for (let i = prevLastDay.getDate() - startOffset + 1; i <= prevLastDay.getDate(); i++) {
    days.push(new Date(year, month - 1, i));
  }

  // 이번 달
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }

  // 다음 달 시작 부분 (이번 달 마지막 요일 기준으로 조정)
  const lastDayOfWeek = lastDay.getDay(); // 이번 달 마지막 날짜의 요일
  const nextDays = lastDayOfWeek === 6 ? 0 : 6 - lastDayOfWeek; // 토요일이면 추가 안 함

  for (let i = 1; i <= nextDays; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
};


export const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const formatDate = (date: Date, format: string = "YYYY-MM-DD"): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return format.replace("YYYY", String(yyyy)).replace("MM", mm).replace("DD", dd);
};
