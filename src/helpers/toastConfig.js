export const handleToastConfig = (Slide, time) => {
  return {
    position: 'bottom-center',
    autoClose: time,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
  };
};
