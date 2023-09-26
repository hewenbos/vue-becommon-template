export const useImgCode = () => {
  const imgColr = new URL('@/assets/code.png', import.meta.url).href
  return {
    imgColr
  }
}
