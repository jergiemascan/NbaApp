import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../utils/Styles";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [favouritePlayers, setFavouritePlayers] = useState([]);
  const [bestPlayers, setBestPlayers] = useState([]);
  const [value, setValue] = useState("");

  const [isError, setIsError] = useState("");

  const getPlayers = async () => {
    try {
      const response = await fetch(
        "https://api.sportsdata.io/v3/nba/scores/json/Players?key=5cb6aacddea940e28938ec5cf20c2a02"
      );
      const res = await response.json();
      if (res.length === 0) {
        setIsError("No player with that name");
      } else {
        setPlayers(res);
      }
      // console.log(res);
    } catch (error) {
      console.log(error);
      setIsError("Failed to fetch player");
    }
  };
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <View>
      <View style={styles.searchView}>
        <TextInput
          value={value}
          style={styles.input}
          placeholderTextColor={"white"}
          placeholder={"Search your favourite team or player"}
          onChangeText={(inputText) => {
            setValue(inputText);
          }}
        />
        <Icon size={16} name="search" color="white" />
      </View>

      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.heading}>Players</Text>
          <View style={styles.flatlistView}>
            <FlatList
              data={players.filter((item) => {
                if (!value) {
                  return true;
                }

                if (
                  item.FirstName.toUpperCase().includes(value.toUpperCase()) ||
                  item.LastName.toUpperCase().includes(value.toUpperCase())
                ) {
                  return true;
                }
              })}
              renderItem={({ item }) => (
                <View style={styles.listStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      if (
                        favouritePlayers.filter(
                          (player) => player.PlayerID === item.PlayerID
                        ).length === 0
                      ) {
                        setFavouritePlayers([...favouritePlayers, item]);
                      }
                    }}
                  >
                    <Icon
                      size={18}
                      name="heart-outline"
                      color={"red"}
                      fontWeight={"bold"}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingVertical: 6,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {item.FirstName + " " + item.LastName}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      if (
                        bestPlayers.filter(
                          (player) => player.PlayerID === item.PlayerID
                        ).length === 0
                      ) {
                        setBestPlayers([...bestPlayers, item]);
                      }
                    }}
                  >
                    <Icon
                      size={18}
                      name="star-outline"
                      color={"red"}
                      fontWeight={"bold"}
                    />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.PlayerID}
            />
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.heading}>Favourite Players</Text>
          <View style={styles.flatlistView}>
            <FlatList
              data={favouritePlayers}
              renderItem={({ item }) => (
                <View style={styles.listStyle2}>
                  <TouchableOpacity
                    onPress={() => {
                      if (
                        bestPlayers.filter(
                          (player) => player.PlayerID === item.PlayerID
                        ).length === 0
                      ) {
                        setBestPlayers([...bestPlayers, item]);
                      }
                    }}
                  >
                    <Icon
                      size={18}
                      name="star-outline"
                      color={"red"}
                      fontWeight={"bold"}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingHorizontal: 30,
                      fontSize: 16,
                      fontWeight: "bold",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "115%",
                    }}
                  >
                    {item.FirstName + " " + item.LastName}
                    <TouchableOpacity
                      onPress={() => {
                        setFavouritePlayers(
                          favouritePlayers.filter(
                            (player) => player.PlayerID !== item.PlayerID
                          )
                        );
                      }}
                    >
                      <Icon
                        size={25}
                        color={"red"}
                        name="close-outline"
                        fontWeight={"bold"}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.PlayerID}
            />
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.heading}>Best Players</Text>
          <View style={styles.flatlistView}>
            <FlatList
              scrollEnabled={true}
              data={bestPlayers}
              renderItem={({ item }) => (
                <View style={styles.listStyle2}>
                  <TouchableOpacity
                    onPress={() => {
                      if (
                        favouritePlayers.filter(
                          (player) => player.PlayerID === item.PlayerID
                        ).length === 0
                      ) {
                        setFavouritePlayers([...favouritePlayers, item]);
                      }
                    }}
                  >
                    <Icon
                      size={18}
                      name="heart-outline"
                      color={"red"}
                      fontWeight={"bold"}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingHorizontal: 30,
                      fontSize: 16,
                      fontWeight: "bold",
                      width: "115%",
                    }}
                  >
                    {item.FirstName + " " + item.LastName}
                    <TouchableOpacity
                      onPress={() => {
                        setBestPlayers(
                          bestPlayers.filter(
                            (player) => player.PlayerID !== item.PlayerID
                          )
                        );
                      }}
                    >
                      <Icon
                        size={25}
                        color={"red"}
                        name="close-outline"
                        fontWeight={"bold"}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.PlayerID}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AllPlayers;
