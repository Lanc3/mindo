import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
const SearchBar = ({ closeDrawer }) => {
  const [clicked, setClicked] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const navigation = useNavigation()
  const callAPI = async (phrase) => {
    closeDrawer()
    navigation.navigate('SearchScreen', { search_term: phrase })
  }

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <TextInput
          style={styles.input}
          placeholder="Search Mindo"
          placeholderTextColor="#6c757d"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onSubmitEditing={() => {
            callAPI(searchPhrase)
          }}
          onFocus={() => {
            setClicked(true)
          }}
        />
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color="#6e822b" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              callAPI(searchPhrase)
            }}
          >
            <Feather
              name="search"
              size={20}
              color="white"
              style={{ paddingRight: 0 }}
            />
          </TouchableOpacity>
        )}
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {/* {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="#6e822b"
            style={{ paddingLeft: 21 }}
            onPress={() => {
              setSearchPhrase('')
            }}
          />
        )} */}
      </View>
    </View>
  )
}
export default SearchBar

// styles
const styles = StyleSheet.create({
  container: {
    margin: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#404040',
  },
  searchBar__unclicked: {
    paddingTop: 50,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#181818',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#181818',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
    color: '#fff',
    paddingBottom: 10,
  },
  loader: {
    paddingRight: 20,
  },
})
