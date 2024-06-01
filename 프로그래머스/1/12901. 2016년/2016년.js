function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateStr = "2016-" + a + "-" + b;
  const date = new Date(dateStr);
  return week[date.getDay()];
}