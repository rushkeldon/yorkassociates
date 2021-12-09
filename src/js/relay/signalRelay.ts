import signals from 'signals';
import { getSignal } from '../utils/utils';

export const signalBreakpointTriggered : signals.Signal = getSignal( 'signalBreakpointTriggered', 1 );
