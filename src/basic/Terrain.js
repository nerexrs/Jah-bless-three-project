let terrain = (arr, index) => {
  return 5*Math.sin(arr[index*3+1]/10)*Math.sin(arr[index*3+0]/10);
}

export default terrain