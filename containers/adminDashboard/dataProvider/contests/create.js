import _ from 'lodash';
import moment from 'moment';
import factory from '../../../../ethereum/contestPoolFactory';
import web3 from '../../../../ethereum/web3';
import { stringToBytes32 } from '../../../../ethereum/utils';

const hoursToEpoch = h => {
  return moment(h * 3600000).unix();
};

export const createContestPoolDefinition = data =>
  new Promise(async (resolve, reject) => {
    try {
      const accounts = await web3.eth.getAccounts();
      const {
        contestName,
        fee,
        startTime,
        endTime,
        graceTime,
        maxBalance,
        managerFee,
        platformFee
      } = data;

      console.log('form data', data);
      console.log('startTime', moment(startTime).unix());
      console.log('endTime', moment(endTime).unix());
      console.log('graceTime', hoursToEpoch(graceTime));
      console.log('maxBalance', maxBalance.toString());
      console.log('managerFe', web3.utils.toBN(managerFee));
      console.log('platformFee', web3.utils.toBN(platformFee));

      const feeFinal = fee | 0;

      const tx = await factory.methods
        .createContestPoolDefinition(
          stringToBytes32(contestName),
          web3.utils.toWei('0', 'ether'),
          web3.utils.toBN(moment(startTime).unix()),
          web3.utils.toBN(moment(endTime).unix()),
          web3.utils.toBN(hoursToEpoch(graceTime)),
          web3.utils.toWei(maxBalance.toString(), 'ether'),
          web3.utils.toBN(managerFee),
          web3.utils.toBN(platformFee)
        )
        .send({
          from: accounts[0]
        });

      console.log('create pool def tx', tx);
      const eventEmitted = _.get(
        tx,
        'events.ContestPoolDefinitionCreated.returnValues'
      );

      if (eventEmitted) {
        resolve(tx);
      } else {
        reject(
          'Error: ContestPoolDefinitionCreated event not emitted in tx',
          tx
        );
      }
    } catch (error) {
      reject(error);
    }
  });
