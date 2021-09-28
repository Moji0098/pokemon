import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

//---color font
import {COLORS} from '../../utils/variables';
// icon
import {Height, Weight, Adaptation} from '../../assets/icons';

const PokeDetailsItem = ({details}) => {
  const {
    abilities = [],
    base_experience = '',
    height = 7,
    is_default = true,
    moves = [],
    name = '',
    order = 0,
    weight = 0,
    sprites = {},
    types = [],
    stats,
  } = details;

  const [sectionOneImg, setSectionOneImg] = useState([]);

  useEffect(() => {
    if (sprites) {
      seprateImages();
    }
  }, [sprites]);

  const seprateImages = () => {
    const values = Object.values(sprites);
    const keys = Object.keys(sprites);
    const one = [];
    for (let i = 0; i < keys.length; i++) {
      if (typeof values[i] !== 'object' && values[i] !== null) {
        one.push({
          [keys[i].replace('_', ' ')]: values[i],
        });
      }
    }
    setSectionOneImg(one);
  };

  const {
    parent,
    child,
    titleValue,
    row,
    rowChild,
    abilityText,
    abilityValue,
    abilityList,
    abilityBox,
    circle,
    whRow,
    whBox,
    whText,
    pokeImage,
    pokeImageList,
    pokeText,
    rowImageChild,
  } = styles;
  return (
    <View style={parent}>
      <View style={child}>
        <View style={row}>
          <Text style={titleValue}>{name}</Text>
        </View>
        <View style={whRow}>
          <View style={whBox}>
            <Height width={20} height={20} />
            <Text style={whText}>{height} cm</Text>
          </View>
          <View style={whBox}>
            <Weight width={20} height={20} />
            <Text style={whText}>{weight} g</Text>
          </View>
        </View>
        <View style={row}>
          <Adaptation width={20} height={20} />
          <View style={rowChild}>
            {Array.isArray(abilities) &&
              abilities.map(item => {
                const {ability} = item;
                const {name: n, is_hidden, slot} = ability;
                return (
                  <View style={abilityBox} key={n}>
                    <Text style={circle} />
                    <View style={abilityList}>
                      <Text style={abilityText}>
                        name :<Text style={abilityValue}>{n}</Text>
                      </Text>
                      <Text style={abilityText}>
                        hidden :{' '}
                        <Text style={abilityValue}>
                          {is_hidden ? 'yes' : 'no'}
                        </Text>
                      </Text>
                      <Text style={abilityText}>
                        slot :{' '}
                        <Text style={abilityValue}>{slot ? slot : 0}</Text>
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>

        <View style={row}>
          <Adaptation width={20} height={20} />
          <View style={rowChild}>
            {Array.isArray(stats) &&
              stats.map(item => {
                const {base_stat, effort, stat} = item;
                const {name: n} = stat;
                return (
                  <View style={abilityBox} key={n}>
                    <Text style={circle} />
                    <View style={abilityList}>
                      <Text style={abilityText}>
                        base_stat :{' '}
                        <Text style={abilityValue}>
                          {base_stat ? base_stat : 0}
                        </Text>
                      </Text>
                      <Text style={abilityText}>
                        effort :{' '}
                        <Text style={abilityValue}>{effort ? effort : 0}</Text>
                      </Text>
                      <Text style={abilityText}>
                        name :<Text style={abilityValue}>{n}</Text>
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <View style={row}>
          <Adaptation width={20} height={20} />
          <View style={rowChild}>
            {Array.isArray(types) &&
              types.map(item => {
                const {slot, type} = item;
                const {name: n} = type;
                return (
                  <View style={abilityBox} key={n}>
                    <Text style={circle} />
                    <View style={abilityList}>
                      <Text style={abilityText}>
                        slot :{' '}
                        <Text style={abilityValue}>{slot ? slot : 0}</Text>
                      </Text>
                      <Text style={abilityText}>
                        name :<Text style={abilityValue}>{n}</Text>
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <View style={row}>
          <Adaptation width={20} height={20} />
          <View style={rowImageChild}>
            {Array.isArray(sectionOneImg) &&
              sectionOneImg.map(item => {
                if (typeof item !== Object && item) {
                  return (
                    <View style={pokeImageList}>
                      <Image
                        source={{
                          uri: Object.values(item)[0],
                          cache: 'only-if-cached',
                        }}
                        style={pokeImage}
                      />
                      <Text style={pokeText}>{Object.keys(item)[0]}</Text>
                    </View>
                  );
                }
              })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    padding: 16,
    minHeight: 200,
    flex: 1,
  },
  child: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
    borderRadius: 8,
    position: 'relative',
    flex: 1,
  },
  titleStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.c393939,
  },
  titleValue: {
    fontSize: 24,
    color: COLORS.c393939,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  whRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginBottom: 16,
    backgroundColor: COLORS.cf9f9f9,
    borderRadius: 8,
    padding: 8,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginBottom: 16,
  },
  abilityText: {fontSize: 12, color: COLORS.c97},
  abilityValue: {fontSize: 10, color: COLORS.c70, fontWeight: 'bold'},
  abilityList: {
    marginLeft: 8,
    flexWrap: 'nowrap',
  },
  rowChild: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  abilityBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 4,
    width: '45%',
    marginTop: 4,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 4,
  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.c393939,
    borderRadius: 3,
    marginTop: 8,
  },
  whBox: {
    width: '50%',
    flexDirection: 'row',
  },
  whText: {
    fontSize: 13,
    color: COLORS.c393939,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  pokeImageList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.cd,
    marginLeft: 8,
  },
  pokeImage: {
    width: 80,
    height: 80,
  },
  pokeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.c24,
    marginBottom: 8,
  },
  rowImageChild: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default PokeDetailsItem;
