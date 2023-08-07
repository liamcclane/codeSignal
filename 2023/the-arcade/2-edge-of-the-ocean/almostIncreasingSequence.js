/**
 * Given a sequence of integers as an array, 
 * determine whether it is possible to obtain a strictly increasing sequence 
 * by removing no more than one element from the array.
 * 
 * Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
 * if a0 < a1 < ... < an. 
 * Sequence containing only one element is also considered to be strictly increasing.
 * @param {Array[Number]} $sequence 
 * @returns {boolean}
 */
function solution($sequence) {
    $size = count($sequence);
    $removedOne = false;

    for ($i = 0; $i < $size; $i++) {
        if ($sequence[$i] <= $sequence[$i - 1]) {
            if ($removedOne) {
                return false;
            }

            // Try removing the current element and check if it's still strictly increasing
            if ($sequence[$i] > $sequence[$i - 2]) {
                // Remove the current element
                unset($sequence[$i - 1]);
            } else {
                // Remove the previous element
                unset($sequence[$i]);
            }

            $sequence = array_values($sequence); // Reset array keys after unset
            $size--;
            $removedOne = true;
            $i = 0; // Start checking again from the beginning
        }
    }

    return true;
}
