import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Colors from '../config/Colors';

import { DataTable } from 'react-native-paper';

const tabelaNumeracao = () => {
  return (
    <View style={styles.homePage}>
      <Header goBackEnabled={true} />

      <DataTable>
        <DataTable.Header>
          <DataTable.Title numeric>Medida-cm</DataTable.Title>
          <DataTable.Title numeric>Tamanho-Brasil</DataTable.Title>
          <DataTable.Title numeric>Tamanho-USA</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell numeric>24.5 cm</DataTable.Cell>
          <DataTable.Cell numeric>35</DataTable.Cell>
          <DataTable.Cell numeric>4.5</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>25.0 cm</DataTable.Cell>
          <DataTable.Cell numeric>36</DataTable.Cell>
          <DataTable.Cell numeric>5.5</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>26.0 cm</DataTable.Cell>
          <DataTable.Cell numeric>37</DataTable.Cell>
          <DataTable.Cell numeric>6</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>27.0 cm</DataTable.Cell>
          <DataTable.Cell numeric>38</DataTable.Cell>
          <DataTable.Cell numeric>7</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>27.5 cm</DataTable.Cell>
          <DataTable.Cell numeric>39</DataTable.Cell>
          <DataTable.Cell numeric>7.5</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>28.0 cm</DataTable.Cell>
          <DataTable.Cell numeric>40</DataTable.Cell>
          <DataTable.Cell numeric>8.5</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>29.0 cm</DataTable.Cell>
          <DataTable.Cell numeric>41</DataTable.Cell>
          <DataTable.Cell numeric>9.5</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>29.5 cm</DataTable.Cell>
          <DataTable.Cell numeric>42</DataTable.Cell>
          <DataTable.Cell numeric>10</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>30.0 cm</DataTable.Cell>
          <DataTable.Cell numeric>43</DataTable.Cell>
          <DataTable.Cell numeric>11</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell numeric>30.5 cm</DataTable.Cell>
          <DataTable.Cell numeric>44</DataTable.Cell>
          <DataTable.Cell numeric>11.5</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});

export default tabelaNumeracao;
