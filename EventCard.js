import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  formatDate,
  getCountdownParts,
} from './api';



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#add8e6',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  date: {
    fontWeight: '200',
    fontSize: 15,
    color: '#808080',
    width: '30%',
    textAlign: 'right',
  },
  title: {
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 7,
    textAlign: 'left',
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  counter: {
    width: '25%',
    flex: 1,
  },
  counterText: {
    fontSize: 30,
    textAlign: 'center',
  },
  counterLabel: {
    fontSize: 12,
    fontWeight: '100',
    color: '#808080',
    textAlign: 'center',
    paddingTop: 0,
  },
});


export default function EventCard({ event }) {
  const {
    days,
    hours,
    minutes,
    seconds,
  } = getCountdownParts(event.date);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.title}>{event.title}</Text>
      </View>

      <View
        style={styles.counterContainer}
      >
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{days}</Text>
          <Text style={styles.counterLabel}>DAYS</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{hours}</Text>
          <Text style={styles.counterLabel}>HOURS</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{minutes}</Text>
          <Text style={styles.counterLabel}>MINUTES</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{seconds}</Text>
          <Text style={styles.counterLabel}>SECONDS</Text>
        </View>
      </View>
    </View>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  }),
};