import { createContext, useEffect, useState } from "react";

const CrowdFundingContext = createContext();

export const CrowdFundingProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [backer, setBacker] = useState(2000);
  const [number, setNumber] = useState();
  const [isDisabled, setDisabled] = useState(true);
  const [progress, setProgress] = useState(50);
  const [amount, setAmount] = useState(50000);
  const [pledged, setPledged] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //   if (modalShow === true) setModal(false);
  // }, [modalShow]);

  const handleNumber = ({ target: { value } }) => {
    if (value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setNumber(+value);
  };

  const onSubmit = () => {
    if (number >= 25) {
      setBacker(backer + 1);
      setProgress(progress + 5);
      let output = amount + number;
      setAmount(output);
    }
    setNumber("");
  };

  const handleMenu = () => {
    setMenu(menu ? false : true);
  };

  const handleModal = () => {
    setModal(modal ? false : true);
  };

  const handleBookmark = () => {
    setBookmarked(bookmarked ? false : true);
  };

  const handlePledged = () => {
    setPledged(!pledged);
    setModal(modal ? false : true);
    setBacker(backer + 1);
  };

  const handleAlert = () => {
    setModalShow(modalShow ? false : true);
  };

  return (
    <CrowdFundingContext.Provider
      value={{
        bookmarked,
        menu,
        modal,
        amount,
        progress,
        backer,
        pledged,
        isDisabled,
        modalShow,
        handleAlert,
        onSubmit,
        handleNumber,
        handleBookmark,
        handleModal,
        handleMenu,
        handlePledged,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};

export default CrowdFundingContext;
