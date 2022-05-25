import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
  },
  column: {
    flex: 0.3,
    alignItems: "center",
  },

  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#e55039",
    color: "#fff",
    textAlign: "center",
    width: "100%",
  },

  input: {
    paddingVertical: 8,
    marginTop: 4,
    textAlign: "center",
    color: "#fff",
    flex: 1,
  },
  searchView: {
    backgroundColor: "#1e3799",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    marginTop: 15,
    paddingVertical: 6,
  },
  flatlistView: {
    paddingVertical: 5,
    flex: 1,
  },
  listStyle: {
    backgroundColor: "#fff",
    opacity: 0.8,
    margin: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    fontSize: 16,
    fontWeight: "bold",
    width: "80%",
    marginLeft: 35,
  },
  listStyle2: {
    backgroundColor: "#fff",
    opacity: 0.8,
    margin: 2,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
    padding: 6,
    fontSize: 16,
    fontWeight: "bold",
    width: "81%",
    marginLeft: 35,
    paddingLeft: 60,
  },
});
