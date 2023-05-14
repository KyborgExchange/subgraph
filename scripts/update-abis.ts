import hubArtifact from '@kyborgexchange/kyborg-contracts/artifacts/contracts/KyborgHub.sol/KyborgHub.json'
import hubPositionsArtifact from '@kyborgexchange/kyborg-contracts/artifacts/contracts/KyborgHubPositions.sol/KyborgHubPositions.json'
import managerArtifact from '@kyborgexchange/kyborg-contracts/artifacts/contracts/periphery/Manager.sol/Manager.json'
import fs from 'fs'
import path from 'path'

fs.writeFileSync(path.join(__dirname, '../abis/Hub.json'), JSON.stringify(hubArtifact.abi, null, 2), 'utf8')

fs.writeFileSync(
  path.join(__dirname, '../abis/HubPositions.json'),
  JSON.stringify(hubPositionsArtifact.abi, null, 2),
  'utf8'
)

fs.writeFileSync(path.join(__dirname, '../abis/Manager.json'), JSON.stringify(managerArtifact.abi, null, 2), 'utf8')
