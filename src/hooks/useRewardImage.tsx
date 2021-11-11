import CoffeeCup from "../assets/images/coffee-cup.svg";

function useRewardImage(reward: string) {
  let image = null;

  switch(reward) {
    case 'Coffee Mug':
      image = CoffeeCup;break;
    default:
      image = CoffeeCup;
  }

  return image;
}

export default useRewardImage;