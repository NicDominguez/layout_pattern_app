const flexStyles = {
  gridLike: {
    title: "Grid Like",
    columns: 5,
    styles: {
      display: "flex",
      gap: "1em",
      flexWrap: "wrap",
      "& > *": {
        flex: "1 1 10em"
      }
    }
  },

  evenColumns: {
    title: "Even Columns",
    columns: 3,
    styles: {
      display: "flex",
      gap: "1em",
      "& > *": {
        flexBasis: "100%"
      }
    }
  },

  contentAndSidebar: {
    title: "Content And Sidebar",
    columns: 2,
    styles: {
      display: "flex",
      gap: "1em",
      flexWrap: "wrap",
      "& > *:nth-child(1)": {
        flex: "1 1 70%",
        minWidth: "30ch"
      },
      "& > *:nth-child(2)": {
        flex: "1 1 25%",
        minWidth: "15ch"
      }
    }
  },

  stretchMiddle: {
    title: "Stretch Middle",
    columns: 3,
    styles: {
      display: "flex",
      gap: "1em",
      "& > *:nth-child(1)": {
        width: "10ch"
      },
      "& > *:nth-child(2)": {
        flexGrow: "1"
      },
      "& > *:nth-child(3)": {
        width: "10ch"
      }
    }
  }
};

export default flexStyles;
