// import fleekStorage from '@fleekhq/fleek-storage-js'
import { upload } from '@fleekhq/fleek-storage-js';

const options = {
	apiKey: `3aeUoeyQffL8v0jNNQv60g==`,
	apiSecret: `F+yU8/8gR35QLdJ4Ek+waC/z1v5xN8Wthx9a6pI2BBM=`,
};
function getNewTimetamps() {
	return Math.floor(new Date().valueOf() / 1000)
}

async function uploadFile(option) {
	const uploadedFile = await upload({
		apiKey: options.apiKey,
		apiSecret: options.apiSecret,
		bucket: getUploadBucket(option.bucket),
		key: option.fileKey,
		ContentType: option.fileType,
		data: option.fileData,
	});
	return uploadedFile;
}
function getBucketUrl(bucket) {
	return `https://storageapi2.fleek.co/${BaseBucket}/${bucket}/`;
}
function getUploadBucket(bucket) {
	return `${BaseBucket}/${bucket}/`;
}

const BaseVersion = 'winner-hash/version-1';
const BaseBucket = `0fdd4305-c758-4bda-97be-de16e5307de4-bucket/${BaseVersion}`;

// 用户认证时间
const bucketAllowanceTest = `AllowanceTimeTest`;
const bucketAllowance = `AllowanceTime`;
const BaseBucketAllowance =
	process.env.NODE_ENV == 'development' ? bucketAllowanceTest : bucketAllowance;
export function getAllowanceFileUrl(userAddress) {
	const BaseUrl = getBucketUrl(BaseBucketAllowance);
	return BaseUrl + userAddress + '.json'; // userAddress.toLocaleLowerCase()
}
export async function uploadUserAllowance(userAddress) {
	let option = {
		bucket: BaseBucketAllowance,
		fileKey: userAddress + '.json',
		fileType: 'json',
		fileData: JSON.stringify({
			time: getNewTimetamps()
		}),
	};
	const res = await uploadFile(option);
	console.log(res);
	return res;
}
