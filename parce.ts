export function get_age(age: string): number {
    const arr: string[] = age.split("")
    const num: number = parseInt(arr[0])
    return num;
  }